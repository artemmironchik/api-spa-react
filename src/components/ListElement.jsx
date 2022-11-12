import { Link } from 'react-router-dom';

export function ListElement({list, listName }) {
  return (
    <Link
      key={list.id}
      to={`/${listName}/${list.id}`}
      className="hover:text-blue-700"
    >
      <span>{(list.title) ? list.title : list.name}</span>
    </Link>
  )
}