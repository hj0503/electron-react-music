# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd ./dist
git init
git add -A
git commit -m '发布'
# 把下面的push命令按照你的情况修改后去掉注释
git push -f git@devinhj.cn:/home/git/music.git master