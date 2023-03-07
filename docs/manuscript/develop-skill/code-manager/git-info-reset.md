

# 修改历史提交信息


#### rebase到指定结点

```bash
git rebase -i xxx

## 或者按相对位置rebase
git rebase -i HEAD~1

```


#### 进入编辑界面，记录着commit的信息

pick---->edit

并保存，即使用`wq`退出


#### 重新设置用户名和邮箱

```bash
git commit --amend --author="chufan <fariy_vip@2925.com>"
```

#### 结束rebase

```bash
git rebase --continue
```

#### 强制推送到目标分支

```bash
git push -f
```

### 参考资料

- https://www.bbsmax.com/A/lk5a87O4J1/