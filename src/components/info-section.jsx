import HorizontalSeparator from "./horizontal-separator";
import { useTranslation } from 'react-i18next';

export default function infoSection(props) {
  const { t } = useTranslation();
  return (
    <>
    <h2 className="mb-2 text-2xl font-bold text-gray-800">{t('landingpage.intro.header')}</h2>
      <div className="mt-8 w-[95%]">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{t('landingpage.projekt.header')}</h2>
        <p>
        {t('landingpage.projekt.text')}
        </p>
      </div>

      <div className="mt-8 w-[95%]">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{t('landingpage.goals.header')}</h2>
        <p>
        {t('landingpage.goals.text')}
        </p>
      </div>

      <div className="my-8 w-[95%]">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{t('landingpage.collaboration.header')}</h2>
        <p>
        {t('landingpage.collaboration.text')}
        </p>
      </div>
      <HorizontalSeparator />

      <div className="mt-8 w-[95%]">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{t('landingpage.discord.header')}</h2>
        <a href="https://www.discord.com">Projekt Discord</a>
      </div>

      <div className="my-8 w-[95%]">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">FAQs</h2>
        <p>
        {t('landingpage.faqs.text')}
        </p>
      </div>
    </>
  );
}
