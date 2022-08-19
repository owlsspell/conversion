import { getUserList } from '../api/api';

const NexButton = ({ offset, setOffset, setUsers }) => {

  const handleChange = () => {
    getUserList(offset).then(res => {
      setUsers(res.records);
      setOffset(res.offset)
    })
  }

  return <button type="button" className="btn btn-secondary mb-5" onClick={handleChange}>Next</button>
}

export default NexButton 