import CircularText from './reactbits/CircularText';

// The recurring "field-stamp" motif: a slowly rotating ring of text around a
// fixed center mark, like a surveyor's stamp on a field report.
const Stempel = ({ text, size = 176, tone = 'ink', spinDuration = 26 }) => {
  const toneClass = tone === 'paper' ? 'text-paper' : 'text-ink';

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <CircularText
        text={text}
        spinDuration={spinDuration}
        onHover="pause"
        size={size}
        letterSize="text-[0.6rem] tracking-[0.15em]"
        className={`${toneClass} font-label uppercase`}
      />
      <div
        className={`absolute inset-0 m-auto flex items-center justify-center rounded-full border ${
          tone === 'paper' ? 'border-paper/60' : 'border-ink/40'
        }`}
        style={{ width: size * 0.52, height: size * 0.52 }}
      >
        <span className={`font-display italic text-sm ${toneClass}`}>KKN</span>
      </div>
    </div>
  );
};

export default Stempel;
