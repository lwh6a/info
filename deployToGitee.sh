#代码在Travis中编译完成后，顺便部署到gitee pages中
#!/bin/bash
cd docs/.vuepress/dist
git config user.name "丶劉灏藴"
git config user.email "lwh19900521@163.com"

git init
git add .
git commit -m "发布pages"
git remote add origin git@gitee.com:liuhaoyun/lwh6a.git
git push --force origin master:master