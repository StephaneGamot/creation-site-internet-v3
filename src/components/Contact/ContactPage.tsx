"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactComponent() {
  const t = useTranslations("contact");

  return (
    <div
      id="contact"
      className="relative isolate bg-gray-900 text-white font-body"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Bloc gauche */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-title text-center font-semibold text-[3352a1]">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg !text-gray-400">{t("description")}</p>
            <dl className="mt-10 space-y-4 text-base text-gray-300">
              <div className="flex gap-x-4">
                <dt>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>{t("address")}</dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <Link href="tel:+32477131993" className="hover:text-white">
                    04 77 13 19 93
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <Link
                    href="mailto:stephanegamot@outlook.com"
                    className="hover:text-white"
                  >
                    stephanegamot@outlook.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Formulaire */}
        <form
          action="https://formsubmit.co/stephanegamot@outlook.com"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold"
                >
                  {t("fields.firstName")}
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="Prénom"
                  required
                  className="mt-2.5 w-full rounded-md bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-[#3352a1]"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold"
                >
                  {t("fields.lastName")}
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="Nom"
                  required
                  className="mt-2.5 w-full rounded-md bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-[#3352a1]"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  {t("fields.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="mt-2.5 w-full rounded-md bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-[#3352a1]"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold"
                >
                  {t("fields.phone")}
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  name="Téléphone"
                  className="mt-2.5 w-full rounded-md bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-[#3352a1]"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  {t("fields.message")}
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  required
                  className="mt-2.5 w-full rounded-md bg-white/10 px-3.5 py-2 text-white placeholder:text-gray-400 focus:outline-[#3352a1]"
                />
              </div>
            </div>

            {/* Anti-spam Honeypot */}
            <div className="sr-only">
              <label htmlFor="website">Ne pas remplir ce champ</label>
              <input
                type="text"
                id="website"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_delay" value="5" />

            <input type="hidden" name="_subject" value={t("successSubject")} />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://www.creation-site-internet.dev"
            />

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="inline-block bg-[#b83250] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b83250]"
              >
                {t("submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
