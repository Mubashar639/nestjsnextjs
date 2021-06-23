import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import client from '../apollo-client';

const Home = () => {
  const [search, setsearch] = useState("")
  const [createUser, setCreateUser] = useState({ firstName: "", lastName: "" })
  useEffect(() => {

    ((async () => {
      try {
        if (search === "") {
          const { data } = await client.query({
            query: gql`
                    query {
                        students {
                          firstName
                          lastName
                          id
                        }
                      }
                  `,
          });
          setusers(data.students)

        } else {
          const { data } = await client.query({
            query: gql`
					query {
						searchStudents(name:"${search}"){
							firstName
							lastName
							id
						}
					}
         `,
          });
          setusers(data.searchStudents)

        }
      } catch (err) {
        console.log(err)
      }
    })())

  }, [search])

  const [users, setusers] = useState<any[]>([])
  const creatUser = async () => {
    try {
      const { data } = await client.mutate({
        mutation: gql`
				mutation{
					createStudent (createStudentInput:{
						firstName:"${createUser.firstName}",
						lastName:"${createUser.lastName}",
					})
					{
						firstName
						lastName
						id
					}
				}
		 `,
      });
      setCreateUser({ firstName: "", lastName: "" })
      setusers([data.createStudent, ...users])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <div className="p-8 mx-auto bg-white shadow-md">
      </div>
      <div className="flex">
        <div className="flex-none w-64  p-12 sm:p-0 sm:w-0 h-screen bg-blue-500">
          <p className="text-white xl p-2"> Dashboard</p>
          <p className="text-white xl p-2"> Manag Ads</p>

          <p className="text-white xl p-2"> create Ad</p>

          <p className="text-white xl p-2"> Inquiries</p>

        </div>
        <div className="flex-grow h-screen bg-gray-100 overflow-auto">

          <div className='p-5'>
            <p className="text-black 4xl p-1 font-semibold"> Top Picks</p>
            <div className="flex flex-wrap ">
              <div className="grid m-3 justify-items-center">
                <img className="w-40 relative top-16 h-40 object-cover rounded-full" src="https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png" />
                <div className="flex top-16">
                  <div className="w-64 grid pt-16 overflow-hidden justify-items-center bg-white rounded-xl shadow-md  p-4 ">
                    <p className="font-semibold	text-sm">Corala</p>
                    <p className="text-sm">$300.00</p>
                    <div className="w-3/4 m-2" >
                      <div className="border">
                      </div>
                    </div>
                    <div className="w-full p-1" >
                      <div className="flex flex-row overflow-ellipsis">
                        <p className="font-semibold pr-2	text-sm overflow-ellipsis">User: </p> <p className="normal overflow-ellipsis text-sm">hmubashar639@gmail.com</p>
                      </div>
                      <div className="flex flex-row overflow-hiddens">
                        <p className="font-semibold  pr-2	text-sm">Since</p> <p className=" normal text-sm">{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                .map((value, key) => {
                  return <div key={key} className="grid m-3 justify-items-center">
                    <img className="w-40 relative top-16 h-40 object-cover rounded-full" src="https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png" />
                    <div className="flex top-16">
                      <div className="w-64 grid pt-16 overflow-hidden justify-items-center bg-white rounded-xl shadow-md  p-4 ">
                        <p className="font-semibold	text-sm">Corala</p>
                        <p className="text-sm">$300.00</p>
                        <div className="w-3/4 m-2" >
                          <div className="border">
                          </div>

                        </div>
                        <div className="w-full p-1" >
                          <div className="flex flex-row overflow-ellipsis">
                            <p className="font-semibold pr-2	text-sm overflow-ellipsis">User: </p> <p className="normal overflow-ellipsis text-sm">hmubashar639@gmail.com</p>
                          </div>
                          <div className="flex flex-row overflow-hiddens">
                            <p className="font-semibold  pr-2	text-sm">Since</p> <p className=" normal text-sm">{new Date().toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


// <div style={{ height: "120px", margin: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
// <p>create Student</p>

// <p><input placeholder="first name" type="text" name="firstName" value={createUser.firstName} onChange={(e) => setCreateUser({ ...createUser, [e.target.name]: e.target.value })} /></p>
// <p><input placeholder="last name" type="text" name="lastName" value={createUser.lastName} onChange={(e) => setCreateUser({ ...createUser, [e.target.name]: e.target.value })} /></p>
// <p><button onClick={creatUser}> create Student</button></p>

// </div>

// <div className="p-5">
// search Student	<input type="text" name="name" value={search} onChange={(e) => setsearch(e.target.value)} />
// </div>
// <div style={{ margin: "auto ", display: "flex", justifyContent: "space-around", flexWrap: "wrap", flexDirection: "row", }} >

// {users.map((user) => (
//   <div key={user.id} style={{ width: "40%", border: "1px solid red", margin: "10px", textAlign: "center", textTransform: "capitalize" }} >
//     <h3>{user.firstName + " " + user.lastName}</h3>
//     <p>
//       userId {user.id}
//     </p>
//   </div>
// ))}
// </div>