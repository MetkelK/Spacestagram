import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider
      i18n={enTranslations}
      theme={{
        colorScheme: "dark",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
export default MyApp;
