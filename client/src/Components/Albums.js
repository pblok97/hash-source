import React, { useContext, useEffect } from 'react'
import { AppContext } from './NewListing'


function Albums() {
  const { uploadImage, setUploadImage} = useContext(AppContext)


	useEffect(() => {
		fetch("/last-upload")
		.then((response) => response.json())
		.then((data) => {
			setUploadImage(data.image_url)
		})
		.catch((error) => console.error.error)
	}, [uploadImage])

  return (
    	<div>
			Hello
			<img src={uploadImage} alt="uploaded image"/>
		</div>
  )
}

export default Albums