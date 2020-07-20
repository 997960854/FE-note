# 详细部署步骤
### 在github仓库中找到setting下的Github Pages选项，在Source选择网站根目录，网站根目录默认是指定分支下的docs文件夹

### 在本地vue项目根路径下新建webpack.config.js，内容如下：
```javascript
module.exports = {
    outputDir: "docs", //修改build默认输出文件夹名dist为githubPage默认网站根目录名docs
    assetPublicPath: "./" //修改默认assetPublicPath: "/"为"./"，防止访问出现空白页
}
```

### 上传vue项目至github仓库，此时以成功部署vue项目至githubPage，通过[githubUserName].github.io访问vue项目

### 若已有域名，可以设置如下步骤，通过访问已有域名来展示自己的githubPage

### 找到github仓库下setting的Github Page选项，将Custom domain设置为已有域名

### 在域名管理网站中新增一条CNAME类型DNS记录，让已有域名映射到githubPage所提供的域名[githubUserName].github.io

### 访问已有域名，成功展示vue项目