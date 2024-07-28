export const getHighlightedText = (text: string, keyword: string) => {
  const searchKeyword = keyword.trim()
  const parts = text.split(new RegExp(`(${searchKeyword})`, 'gi'));
  return <span> {parts.map((part, i) =>
    <span key={i} style={part.toLowerCase() === searchKeyword.toLowerCase() ? { background: 'cyan' } : {}}>
      {part}
    </span>)
  } </span>;
}