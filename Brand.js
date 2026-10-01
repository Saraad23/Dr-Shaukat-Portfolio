// Round headshot (initials when site.avatar is null) plus name and title; shared by the header, menu and footer.
export default function Brand({ site }) {
  return (
    <>
      {site.avatar
        ? <img className="mark" src={site.avatar} alt="" width="44" height="44" />
        : <span className="mark" aria-hidden="true">{site.initials}</span>}
      <span className="brand-name"><strong>{site.name}</strong><small>{site.title}</small></span>
    </>
  );
}
