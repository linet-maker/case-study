'use client';
// Email address counter bots
let emailAcc = '';
const testing = ['muiruri.', 'samwel', '@', 'outlook', '.com'];
for (let i = 0; i <= testing.length - 1; i++) {
  emailAcc += testing[i] + '';
  // console.log(emailAcc);
}
const antiContact = 254110081288;

// greetings and salutation

let feedBack;
const salutation = `Have a`;
const greetList = ['splendid ⚡', 'great 😎', 'fantastic 💯', 'fine ☕'];

// Fetching time
const option = { weekday: 'long' };
const timeFetch = new Date().getHours();
const dayFetch = new Date().toLocaleString('en-us', option);
if (timeFetch < 12) {
  let greetings;
  for (let i = 0; i <= Math.floor(Math.random() * greetList.length); i++) {
    // select a random text
    greetings = `${salutation} ${greetList[i]} ${dayFetch} morning!`;
    feedBack = greetings;
  }
} else if (timeFetch < 18) {
  let greetings;
  for (let i = 0; i <= Math.floor(Math.random() * greetList.length); i++) {
    // select a random text
    greetings = `${salutation} ${greetList[i]} ${dayFetch} afternoon!`;
    feedBack = greetings;
  }
} else {
  let greetings;
  for (let i = 0; i <= Math.floor(Math.random() * greetList.length); i++) {
    // select a random text
    greetings = `${salutation} ${greetList[i]} ${dayFetch} evening!`;
    feedBack = greetings;
  }
}

export default function Contact() {
  return (
    <>
      <section className="post-list post-content over-scroll-bottom">
        <div className="post-data">
          <br />
          <p>
            <b>Location</b>
            <br />
            <i>Nairobi, Kenya</i>
            <br />
            <i>Mirema</i>
            <br />
            <br />
          </p>
          <p>
            {' '}
            Currently am working on personal projects, and a few freelance gigs.
            Feel free to reach me for any inquiries, and projects at my{' '}
            <a href={`mailto:${emailAcc}`}>
              {' '}
              <b>email</b>{' '}
            </a>
            and{' '}
            <a href={`tel:+${antiContact}`}>
              {' '}
              <b>phone no</b>
            </a>
            <br />
            <br />
            <span>{`${feedBack}`}</span>
          </p>
        </div>
      </section>
    </>
  );
}
