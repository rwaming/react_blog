import { useState } from 'react';

import Feed from './FrontPage/Feed';

/** Only do pages move by scroll
 * @page Home - linked motion with Profile
 * @page Profile - linked motion with Home
 * @page Feed
 */
export default function FrontPage() {
  // eslint-disable-next-line no-unused-vars
  const [feed, setFeed] = useState(<Feed />);
  return <div className='front-page'>{feed}</div>;
}
