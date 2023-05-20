import { useDispatch, useSelector } from "react-redux"
import { getSearchApi } from "../api/getSearch"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import CardMovie from "../components/CardMovie"

const Search = () => {
  const dispatch = useDispatch()
  const {searchArr} = useSelector((state) => state.searchArr)

  //Navigate other route, and get id params url
  const navigate = useNavigate()
  const {id}  = useParams();

  //Form submit redirect to route search/(input value)
  const formSubmit = (e) => {
    e.preventDefault()
    //trim() remove blank spaces in string start and end
    const text = e.target.text.value.trim()
    if (text.length > 0) {
      navigate(`/search/${text}`)
    }
  }

  useEffect(() => {
    //id params route, is not empty, call api
    if (id !== undefined) {
      getSearchApi(id, dispatch)
    } else {
      navigate("/search")
    }
    
  }, [dispatch, id, navigate])

  return (
    <>
    <section>
      <br />
      <br />
      <h1>BUSCAR</h1>
      <form action="" onSubmit={(e) => formSubmit(e)}>
      <input type="text" name="text" id="" placeholder="Buscar"/>
      <button type="submit"></button>
      </form>
    </section>
    <main className="cardMovie-container">
      {searchArr.length > 0 ? (
        searchArr.map((movie) => {
          return <CardMovie movieData={movie} key={movie.id}/>
        })
      ) : null}
    </main>
    </>
  )
}

export default Search