# cyl_website
www.yilai.me
使用 cursor 的测试小项目（实验性质）。  

## 项目简介  
该仓库演示了一个轻量的前端页面项目，基于 Vite、Tailwind CSS 构建。 

## 技术栈  
- **构建工具**：Vite  
- **样式框架**：Tailwind CSS  
- **代码检查**：ESLint  
- **语言**：JavaScript、HTML、CSS  
- **目录结构**：  
  - `public/` — 公共静态资源  
  - `src/` — 源代码目录  
  - 根目录含 `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js` 等配置文件  

## 功能／特性  
- 实验 “cursor” 交互效果（尚处于原型阶段）  
- 响应式设计支持（借助 Tailwind）  
- 快速构建启动脚本（通过 Vite）  
- 代码风格约束（通过 ESLint）  
- 尚缺／待完善：  
  - 完整的交互逻辑（cursor 动画、用户行为响应等）  
  - 多页面支持或路由  
  - UI / UX 细节完善  
  - 生产环境构建优化  

## 快速开始  
```bash
# 克隆仓库
git clone https://github.com/LawLv/cyl_website.git
cd cyl_website
npm install
npm run dev
npm run build
