import { useState } from "react"

const UserForm = ({addUser}) => {
  const [name,setName] = useState("")
  const [email,setMail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({ name,email });

    setMail("");
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">İsim</label>
          <input 
          value={name}
          id="name" 
          type="text" 
          className="form-control my-3"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="mail">Email</label>
          <input 
          value={email}
          id="mail" 
          type="text" 
          className="form-control my-3"
          onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Kullanıcı Ekle</button>
      </form>
    </div>
  )
}

export default UserForm