import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';
import { Accordion, AccordionHeader, useToggleAccordion } from './accordion';

const style = {
  active: `font-normal mx-4 text-sm text-blue-600`,
  inactive: `font-light mx-4 text-sm text-gray-900`,
  link: `flex items-center justify-start my-1 p-3 text-black`,
  section: `flex justify-start my-2 py-6 px-4 text-black text-sm`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();
  const { selected, toggleAccordion } = useToggleAccordion({
    defaultSection: '', // if you want the content of a section to be visible on the first load, add the name of the section
  });

  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map((section) => (
          <div key={section.section}>
            <AccordionHeader
              id={section.section}
              selected={selected}
              className={style.section}
              onClick={toggleAccordion(section.section)}
            >
              <span>{section.icon}</span>
              <span className="pl-3">{section.section}</span>
            </AccordionHeader>
            <Accordion selected={selected} id={section.section}>
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
          </div>
        ))}
      </li>
    </ul>
  );
}
