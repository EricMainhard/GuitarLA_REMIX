import { GuitarItem } from './GuitarItem'

export const GuitarsList = ({guitars}) => {
  return (
    <>
        <h1 className="heading">
            Our Collection
          </h1>
          {
            guitars.length && (
              <div className='guitars__grid container'>
                {
                  guitars.map( guitar => (
                    <GuitarItem key={guitar.id} {...guitar}/>
                  ))
                }
              </div>
            )
          }
    </>
  )
}
