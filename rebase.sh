git checkout observables
git branch -f observables_backup

git rebase --onto jump-start head~4 head
git branch -f observables

git checkout architecture
git branch -f architecture_backup

git rebase --onto jump-start head~2 head
git branch -f architecture

git checkout forms
git branch -f forms_backup

git rebase --onto jump-start head~6 head
git branch -f forms

git checkout routing
git branch -f routing_backup

git rebase --onto jump-start head~4 head
git branch -f routing

git checkout jump-start