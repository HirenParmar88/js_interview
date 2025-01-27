const dt = new Date().getTime()
console.log(dt);

const day=new Date(1738001299279).getDate()
console.log(day);

const month=new Date(1738001299279).getMonth()
console.log(month);

const year=new Date(1738001299279).getFullYear()
console.log(year);

const aa = Intl.DateTimeFormat('en-US').format(1738000243077)
console.log(aa);

const ddmmyyyy = Intl.DateTimeFormat('en-US', { dateStyle: 'full',
    timeStyle: 'long',}).format(1738000243077)
console.log(ddmmyyyy);

const Format = Intl.DateTimeFormat('en-US', { dateStyle: 'short',
    timeStyle: 'long',}).format(1738000243077)
console.log(Format);
