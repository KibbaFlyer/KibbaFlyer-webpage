import { useState, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const languages = [
    { value: 'en', label: '🇬🇧 English' },
    { value: 'de', label: '🇩🇪 Deutsch' },
    { value: 'sv', label: '🇸🇪 Svenska' },
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedValue, setSelectedValue] = useState<string>("en");

    useEffect(() => {
        const currentLanguage = languages.find(lang => lang.value === i18n.language);
        if (currentLanguage) {
            console.log('Changing language');
            setSelectedValue(currentLanguage.value);
        }
    }, [i18n.language]);

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const languageObj = languages.find(lang => lang.value === event.target.value);
        if (languageObj) {
            console.log('Changing language to:', event.target.value)
            i18n.changeLanguage(event.target.value);
        }
    };

    return (
        <div>
            <select
                value={selectedValue}
                className={styles.languageLabel}
                onChange={(event) => changeLanguage(event)}>
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSwitcher;
