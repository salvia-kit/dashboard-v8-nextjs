const Snippet = () => (
  <pre className="font-mono text-sm px-4 py-1 rounded overflow-x-auto max-w-full bg-gray-100 text-black border">
    {`[ 
  {
    section: 'Documents',
    icon: <DocumentsIcon />,
    content: [
       {
         title: 'Taxes',
         link: '/documents/taxes',
       },
       {
         title: 'Travel',
         link: '/documents/travel',
       },
    ]
  }
]
`}
  </pre>
);

export default Snippet;
