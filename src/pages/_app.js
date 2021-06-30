import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/index';

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
