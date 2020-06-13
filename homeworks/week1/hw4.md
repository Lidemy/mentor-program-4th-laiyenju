## 跟你朋友介紹 Git

### Git 常用指令

- `git init`：告訴電腦「請幫我追蹤這份文件的變動」，才會啟動 Git
- `git status`：查看有哪些更改過的文檔沒被放入暫存區
- `git add`：將更改過的檔案放入暫存區
    - 一次放一個檔案：`git add <檔案名稱>`
    - 一次放所有檔案：`git add .`
    - 將檔案從暫存區中拉出來：`git rm --cached <檔案名稱>`
- `git commit`：提交更新的版本
    - `git commit -m "<註解>"`：寫註解，讓自己或其他人可以大概知道這個改動是什麼
    - `git commit -am "<註解>"`：一次完成 `git add` 與 `git commit`
- `git log` 查看版本的歷史紀錄，能看到是誰提交、何時提交、註解等
    - 顯示簡短的版本紀錄：`git log --oneline`，連版本號也會變短
- `git checkout <版本號>`：回到過去的某版本號，類似像開啟以前的版本資料夾，只能看到該版本資料夾下的檔案
- `git branch`：處理與 git 分支相關的動作
    - 查看現在總共有哪些分支：`git branch -v`
    - 建立新分支：`git branch <分支名稱>`
    - 刪除分支：`git branch -d <分支名稱>`
- `git checkout <分支名稱>`：切換分支，例如 `git branch newfeature` 會切換到名為 newfeature 的分支，切回 master 就是 `git branch master`
- `git merge`：合併變動的內容。例如在 master 分支下執行 `git merge newfeature`，就會將 newfeature 更改過的內容同步到 master 分支。

在 Git 版本管理的概念中，預設紀錄的分之通常是 master，當要新增某些東西前，要養成良好習慣，先建立新的 branch 再開始動工，當結束編輯、merge 到 master 後，再刪除 branch。而當 Git 版本管理的檔案中，有個人或電腦系統檔，可在開發中的專案資料夾內新建一個「.gitignore」檔，在檔案內寫明不想被 git 追蹤的檔案名稱，git 就會自動忽略該檔案。

### 使用 GitHub

GitHub 是一種可以存放程式碼雲端資料庫。使用雲端資料庫管理程式碼的話，就需要了解「本地端」跟「遠端」間的互動關係。
「本地端」指的就是我們自己的電腦，「遠端」指的就是 GitHub Repository，當要將本地端的程式碼上傳到遠端，或要將遠端的程式碼更新到本地端，就會用到 `git push` 跟 `git pull` 兩種指令。

- `git push`：將本地端的檔案上傳到遠端（GitHub）
    - 將本地端的檔案上傳到遠端的 master 分支 `git push origin master`
    - 將本地端的檔案上傳到遠端的 newfeature 分支 `git push origin newfeature`
- `git pull`：讓本地端的檔案跟遠端同步

從 [GitHub workflow](https://guides.github.com/introduction/flow/) 可以了解到使用 GitHub 的工作流程：

1. 開發前，先開 branch
2. 切換到新開的 branch 後，開始開發，過程中可以透過 commit 紀錄開發的版本
3. 完成開發後，push 到遠端並送出 pull request
4. code review，討論程式碼之類的
5. 部署
6. merge 到 master