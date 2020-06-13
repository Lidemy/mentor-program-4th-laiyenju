## 交作業流程

1. 開寫之前，先建立一個 branch：`git branch week1`
2. 切換到新 branch：`git checkout week1`
3. 開始編寫作業，過程中可以依自己的需求存檔。
4. 完成作業後，檢查是否完成自我檢討跟作業要求，再提交到遠端 GitHub repository 的 branch：`git push origin week1`
5. 進入 GitHub 發出 pull request，再到學習平台回報進度，並填寫 PR 頁面的連結。
6. 等作業被 merge 後，在本地端切回 master：`git checkout master`
7. 讓本地端的進度與 GitHub 同步：`git pull origin master`
8. 刪除本地端的 branch：`git branch -d week1`