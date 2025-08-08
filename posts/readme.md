# 静思博客 - 基于 GitHub Pages 的极简静态博客系统

![博客截图](assets/screenshot.png)

## 🌟 项目简介

静思博客是一个轻量级、完全静态的博客系统，专为技术写作者和内容创作者设计。它利用 GitHub Pages 提供免费托管，无需服务器、数据库或复杂配置，只需简单的 Markdown 文件即可发布内容。

## ✨ 核心特性

- **零成本托管** - 完全运行在 GitHub Pages 上
- **极简写作体验** - 使用 Markdown 编写文章
- **现代响应式设计** - 适配所有设备屏幕
- **无依赖架构** - 仅需浏览器即可运行
- **内置安全防护** - 防 XSS 等常见攻击
- **超快加载速度** - 全球 CDN 加速

## 🛠️ 技术栈

- **前端**: 纯 HTML/CSS/JavaScript
- **Markdown 解析**: [marked.js](https://marked.js.org/)
- **UI 框架**: 无 (纯手写 CSS)
- **代码高亮**: 可集成 [Prism.js](https://prismjs.com/)
- **部署平台**: GitHub Pages

## 📂 项目结构

```
.
├── index.html          # 博客主页面
├── posts/              # 所有文章目录
│   ├── hello-world.md  # 示例文章
│   └── list.json       # 文章元数据
└── assets/             # 静态资源
    ├── images/         # 文章图片
    └── screenshot.png  # 博客截图
```

## 🚀 快速开始

1. **Fork 本仓库** 到你的 GitHub 账户
2. **重命名仓库** 为 `你的用户名.github.io`
3. **编辑文章**:
   - 在 `posts/` 目录下创建新的 `.md` 文件
   - 更新 `posts/list.json` 添加文章元数据
4. **立即生效**:
   ```bash
   git add .
   git commit -m "添加新文章"
   git push
   ```

## ✍️ 文章格式规范

```markdown
---
date: 2023-06-15    # 发布日期
title: "文章标题"    # 显示标题
readingTime: 5       # 预计阅读分钟数
---

# 这里是文章标题

正文内容使用标准 Markdown 语法...

## 二级标题

- 列表项1
- 列表项2

![图片描述](assets/images/example.jpg)
```

## 🛡️ 安全特性

1. **自动内容净化** - 过滤潜在的恶意脚本
2. **严格的 CSP 策略** - 防止资源劫持
3. **输入验证** - 防止路径遍历攻击
4. **HTTPS 强制** - 所有流量加密传输

## 🌍 访问统计集成

如需添加访问统计，在 `</body>` 前添加:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📜 开源协议

本项目采用 [MIT License](LICENSE)，您可以自由地:

- 使用、复制和修改软件
- 用于个人或商业项目
- 仅需保留原始版权声明

## 🤝 贡献指南

欢迎通过 Issue 或 Pull Request 贡献:
1. 报告问题或建议
2. 提交 UI 改进
3. 添加新功能
4. 优化文档

---

🔄 最后更新: 2023年6月  
🔗 在线演示: [https://username.github.io](https://username.github.io)
