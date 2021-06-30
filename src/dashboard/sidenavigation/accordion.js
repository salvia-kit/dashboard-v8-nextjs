import React from 'react';
import { useRouter } from 'next/router';

export function useToggleAccordion(props) {
  const [selected, setSelected] = React.useState(props?.defaultSection || '');
  const router = useRouter();

  const toggleAccordion = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    [],
  );

  // Reset accordion state when route starts changing
  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      router.events.on('routeChangeStart', () => setSelected(''));
    }

    return () => {
      if (window.innerWidth < 1024) {
        router.events.off('routeChangeStart', () => setSelected(''));
      }
    };
  }, [router]);

  return { selected, toggleAccordion };
}

export function Accordion({ selected, children, id }) {
  const ref = React.useRef();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div
      className="-mt-5 overflow-hidden text-gray-600 transition-height ease duration-300"
      ref={ref}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({ selected, id, children, ...rest }) {
  return (
    <div role="button" {...rest}>
      {children}
      <span className="ml-auto">
        {selected === id ? <AngleDownIcon /> : <AngleRightIcon />}
      </span>
    </div>
  );
}

const AngleRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
