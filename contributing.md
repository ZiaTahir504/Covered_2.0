**General Workflow**

Fork the repo

Cut a namespaced feature branch from main
bug/...
feat/...
test/...
doc/...
refactor/...

Make commits to your feature branch. Prefix each commit like so:
(create) : Indicates if a new file/component is being created in the project scope.
(remove) : For whenever a block of code or file is removed.
(update) : When a change occurs that enhances the features of a file.
(insert) : When additional code blocks/features are added in the file scope.
(relocate) : Signifies if a file/component is moving into a different directory.
(documentation) : When documentation is added into the scope of a file.
(clean) : Cleans the file from spaghetti blocks.
(refactor) : Refactors content within a file.
(fix) : For fixing bugs in file scope.

When you’ve finished with your fix or feature, Rebase upstream changes into your branch. submit a [pull request][] directly to main. Include a description of your changes.

Your pull request will be reviewed by another maintainer. The point of code reviews is to help keep the codebase clean and of high quality and, equally as important, to help you grow as a programmer. If your code reviewer requests you make a change you don’t understand, ask them why.
Fix any issues raised by your code reviewer, and push your fixes as a single new commit.

Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your own commits.

**Detailed Workflow**

Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:
git remote add upstream https://github.com/reactorcore/<NAME_OF_REPO>.git
Cut a namespaced feature branch from main
Your branch should follow this naming convention:
bug/...
feat/...
test/...
doc/...
refactor/...
# Creates your branch and brings you there

These commands will help you do this:
git checkout -b `your-branch-name`
Make commits to your feature branch.
Prefix each commit like so
(create) : Indicates if a new file/component is being created in the project scope.
(remove) : For whenever a block of code or file is removed.
(update) : When a change occurs that enhances the features of a file.
(insert) : When additional code blocks/features are added in the file scope.
(relocate) : Signifies if a file/component is moving into a different directory.
(documentation) : When documentation is added into the scope of a file.
(clean) : Cleans the file from spaghetti blocks.
(refactor) : Refactors content within a file.
(fix) : For fixing bugs in file scope.

Make changes and commits on your branch, and make sure that you only make changes that are relevant to this branch. If you find yourself making unrelated changes, make a new branch for those changes.

**Commit Message Guidelines**

Commit messages should be written in the present tense; e.g. “Fix continuous integration script”.
The first line of your commit message should be a brief summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.

If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

**Rebase upstream changes into your branch**

Once you are done making changes, you can begin the process of getting your code merged into the main repo. Step 1 is to rebase upstream changes to the master branch into yours by running this command from your branch:
git pull --rebase upstream master

This will start the rebase process. You must commit all of your changes before doing this. If there are no conflicts, this should just roll all of your changes back on top of the changes from upstream, leading to a nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way through the rebasing process. Git will pause rebasing to allow you to sort out the conflicts. You do this the same way you solve merge conflicts, by checking all of the files git says have been changed in both histories and picking the versions you want. Be aware that these changes will show up in your pull request, so try and incorporate upstream changes as much as possible.

You pick a file by git adding it - you do not make commits during a rebase.
Once you are done fixing conflicts for a specific commit, run:
git rebase --continue

This will continue the rebasing process. Once you are done fixing all conflicts you should run the existing tests to make sure you didn’t break anything, then run your new tests (there are new tests, right?) and make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until you get here again and nothing is broken and all the tests pass.

**Make a pull request**

Make a clear pull request from your fork and branch to the upstream master branch, detailing exactly what changes you made and what feature this should add. The clearer your pull request is the faster you can get your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once they are satisfied they will merge your changes into upstream. Alternatively, they may have some requested changes. You should make more commits to your branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and someone will look at your code again. If they like it, it will get merged, else, just repeat again.

**Guidelines**

Uphold the current code standard:
- [ ] Keep your code [DRY][].
- [ ] Apply the [boy scout rule][].
- [ ] Follow STYLE-GUIDE.md
- [ ] Run the [tests][] before submitting a pull request.
Tests are very, very important. Submit tests if your pull request contains new, testable behavior.
Your pull request is comprised of a single ([squashed][]) commit.

Checklist:
This is just to help you organize your process
 Did I cut my work branch off of main (don’t cut new branches from existing feature branches)?
 Did I follow the correct naming convention for my branch?
 Is my branch focused on a single main change?
 Do all of my changes directly relate to this change?
 Did I rebase the upstream main branch after I finished all my work?
 Did I write a clear pull request message detailing what changes I made?
 Did I get a code review?
 Did I make any requested changes from that code review?
If you follow all of these guidelines and make good changes, you should have no problem getting your changes merged in.
