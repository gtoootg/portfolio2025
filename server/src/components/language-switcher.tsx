import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale-switch-select";

const getLocaleLabel = (locale: string) =>
  locale === "en" ? "English" : "日本語";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const currentValue = getLocaleLabel(locale);

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={currentValue}>
      {routing.locales.map((cur) => {
        const label = cur === "en" ? "English" : "日本語";

        return (
          <option key={cur} value={cur}>
            {label}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
