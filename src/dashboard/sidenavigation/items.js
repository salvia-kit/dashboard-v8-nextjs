import Link from 'next/link';

import data from './data';
import Accordion from './accordion';
import { useRouter } from 'next/router';

const style = {
  active: `font-normal mx-4 text-sm text-blue-600`,
  inactive: `font-light mx-4 text-sm text-gray-900`,
  link: `inline-flex items-center justify-start my-1 p-3 text-black`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();

  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map((section) => (
          <Accordion key={section.section}>
            <div className="flex">
              <span>{section.icon}</span>
              <span className="pl-3">{section.section}</span>
            </div>
            {section.content.map((item) => (
              <div className="pl-5" key={item.title}>
                <Link href={item.link}>
                  <a className={style.link}>
                    <span
                      className={
                        item.link === asPath ? style.active : style.inactive
                      }
                    >
                      {item.title}
                    </span>
                  </a>
                </Link>
              </div>
            ))}
          </Accordion>
        ))}
      </li>
    </ul>
  );
}
