class BlogSearch {
  constructor() {
    this.articles = [];
    this.searchIndex = [];
    this.init();
  }

  async init() {
    await this.loadArticles();
    this.createSearchIndex();
    this.setupSearchUI();
  }

  async loadArticles() {
    try {
      const response = await fetch('/posts/list.json');
      this.articles = await response.json();
      
      // 加载每篇文章的完整内容
      for (let article of this.articles) {
        if (!article.content) {
          const contentResponse = await fetch(`/posts/${article.slug}.md`);
          article.content = await contentResponse.text();
        }
      }
    } catch (error) {
      console.error('加载文章失败:', error);
    }
  }

  createSearchIndex() {
    this.searchIndex = this.articles.map(article => ({
      id: article.slug,
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      tags: article.tags || [],
      date: article.date
    }));
  }

  setupSearchUI() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
      <div class="search-box">
        <input type="text" id="search-input" placeholder="搜索文章..." />
        <button id="search-btn">搜索</button>
      </div>
      <div id="search-results" class="search-results"></div>
    `;

    // 插入到页面合适位置
    const header = document.querySelector('header');
    header.appendChild(searchContainer);

    // 添加事件监听
    document.getElementById('search-btn').addEventListener('click', () => this.search());
    document.getElementById('search-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.search();
    });
  }

  search() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results');
    
    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    const results = this.searchArticles(query);
    this.displayResults(results, resultsContainer);
  }

  searchArticles(query) {
    return this.searchIndex.filter(item => {
      const searchableText = `
        ${item.title.toLowerCase()}
        ${item.content.toLowerCase()}
        ${item.excerpt.toLowerCase()}
        ${item.tags.join(' ').toLowerCase()}
      `;
      
      return searchableText.includes(query);
    });
  }

  displayResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<p class="no-results">没有找到相关文章</p>';
      return;
    }

    container.innerHTML = results.map(result => `
      <article class="search-result">
        <h3><a href="/?post=${result.id}">${result.title}</a></h3>
        <div class="result-meta">
          ${new Date(result.date).toLocaleDateString()} • 
          ${this.highlightText(result.excerpt, document.getElementById('search-input').value)}
        </div>
        <div class="result-content">
          ${this.highlightText(result.content.substring(0, 200), document.getElementById('search-input').value)}...
        </div>
      </article>
    `).join('');
  }

  highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}

// 初始化搜索功能
document.addEventListener('DOMContentLoaded', () => {
  new BlogSearch();
});