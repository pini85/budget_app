
FIX WHEN USER CLICKS OUTSIDE THE NAV CONTAINER IT COLLPASES!





Bugs to fix:
when gathering the total numbers Math.round wont round the decimal points,/ locaStorage.total


////////////////////////////////////////////////


Modify the value !!!!
Delete !!!
Update? naaaahhhhh
Overview bugs % !!!!!
Statistics(weekly,monthly,yearly) !!!!!!

TODO:
Save all random data to local storage;!!!!!!!
modify the dom to always have the newest date first.!!!!!!!!!!!!!

overview display current month.!!!!!!

dispaly - sign on expenses and red!!!!!!!



Alert at start -- Best viewed in mobile,work in progress,present link blog, random data or your own.
async function for waiting for loading random
when no expense or income in overview dispaly message.!!!!!!!!!!!
Also if you can reload page without leaving page with async

------------------------

Categories, custom categories
DataBase
option to choose when is the start of the week.
refactor :
statistics yearly will go automatically to 2020 no need for hard coding.
satistics to navigate from weekly the whole week every week from all the data
same to month in overview.
async and ajax for income and expense page also statistics when clicked on random button will async the div.
put only 10 items per screen on income and expense and an arrow to go back and forward.
if there is no data display the same message when clicked on weekly monthly yearly.

refactor all the variables into one in each function like so :const blld,glglf,vlflf,fkfkf;

format nav icons ahref etc

formatting the controllers having too many functions to call


Refactor:

I want to disable scrolling for google chorme mobile so they will not see the empty space.
I've tried so far the following:

1) Installed a npm package and disabled body scrolling:

https://www.npmjs.com/package/body-scroll-lock

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
disableBodyScroll(document.body);

2) body.style ="over-flow".

only worked for is body position fixed but it is not good for UX.
https://medium.com/jsdownunder/locking-body-scroll-for-all-devices-22def9615177

But I have a peoblem with my samsung s5 not displaying exactly how i want it.
I tried to do this:
if (window.matchMedia('(max-width: 370px)')) {
    document.querySelector('.container').style.maxHeight = 'calc(100vh - x-amount)';
    document.body.style.position = 'fixed';
    But it is always true for everything.




