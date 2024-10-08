const CharacterLocation = (props) => {
  const { location, detail } = props;

  return (
    <div className="
    LOCATION-WRAPPER
    flex flex-row gap-1 items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <div className={`
      CHARACTER-LOCATION
      ${detail ? 'text-xl' : 'text-lg'}
      font-medium text-zinc-700`}
      >
        {location || 'Unassigned'}
      </div>
    </div>
  );
};

export default CharacterLocation;
