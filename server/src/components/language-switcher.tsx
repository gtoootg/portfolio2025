import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale-switch-select";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={"Engligh"}>
      {routing.locales.map((cur) => {
        const label = cur === "en" ? "Engligh" : "日本語";

        return (
          <option key={cur} value={cur}>
            {label}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
