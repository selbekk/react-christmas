import Router from 'next/router';

const TodayPage = () => null;
TodayPage.getInitialProps = async ({ res, query }) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const isDecember = now.getMonth() === 11;
  const currentDate = isDecember ? Math.min(now.getDate(), 24) : 1;
  const redirectUrl = `/${currentYear}/${currentDate}`;
  if (res) {
    res.writeHead(302, {
      Location: redirectUrl
    });
    res.end();
  } else {
    Router.push(redirectUrl);
  }
};

export default TodayPage;
