import { Modal } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { updateBlog } from '../../../redux/actions/blog'
import { Upload } from '../../../utils/Components'
import { deleteImageReducer } from '../../../redux/reducers/general'

const Update = ({ open, setOpen, blog }) => {

    ////////////////////////////////////// VARIABLES //////////////////////////////////
    const dispatch = useDispatch()
    const { isFetching } = useSelector(state => state.blog)
    const { url } = useSelector(state => state.general)

    ////////////////////////////////////// STATES ////////////////////////////////////
    const [blogData, setBlogData] = useState(blog)

    ////////////////////////////////////// USE EFFECTS /////////////////////////////////
    useEffect(() => {
        setBlogData(blog)
    }, [blog])
    useEffect(() => {
        setBlogData({ ...blogData, image: url })
    }, [url])

    ////////////////////////////////////// FUNCTIONS /////////////////////////////////
    const handleUpdateBlog = () => {
        dispatch(updateBlog(blogData._id, blogData, setOpen))
        dispatch(deleteImageReducer())
    }
    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value })
    }



    return (
        <Modal open={open} onClose={() => setOpen(false)} className="w-screen h-screen flex justify-center items-center">
            <div className="sm:w-[20rem] w-[90%] max-h-[80%] overflow-y-scroll border-gray-300 border-[1px] rounded-md bg-white shadow-lg">
                <div className="w-full flex justify-start items-center py-4 px-4 bg-gray-100">
                    <h3 className="text-lg font-extrabold text-orange shadow-none">Update Blog</h3>
                </div>

                <div className="p-5 bg-white flex flex-col gap-5 w-full">
                    <div className="flex justify-center items-center w-full min-h-[10rem] bg-gray-100 rounded-md">
                        <Upload image={blogData?.image} />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize w-full text-sm text-gray-700">Name:</label>
                        <TextareaAutosize
                            type="text"
                            autoComplete="off"
                            placeholder="Name"
                            value={blogData?.name}
                            name="name"
                            onChange={handleChange}
                            className="w-full bg-gray-100 h-[40px] rounded-md px-3 py-2 resize-none outline-none text-sm text-gray-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize w-full text-sm text-gray-700">Title:</label>
                        <TextareaAutosize
                            type="text"
                            autoComplete="off"
                            placeholder="Title"
                            value={blogData?.title}
                            name="title"
                            onChange={handleChange}
                            className="w-full bg-gray-100 h-[40px] rounded-md px-3 py-2 resize-none outline-none text-sm text-gray-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize w-full text-sm text-gray-700">Description:</label>
                        <TextareaAutosize
                            type="text"
                            autoComplete="off"
                            placeholder="Description"
                            value={blogData?.description}
                            name="description"
                            onChange={handleChange}
                            minRows={5}
                            maxRows={5}
                            className="w-full bg-gray-100 rounded-md px-3 py-2 resize-none outline-none text-sm text-gray-800 overflow-y-scroll"
                        />
                    </div>
                    <div className="flex w-full justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="bg-gray-200 text-black rounded-md px-4 py-2">
                            Close
                        </button>
                        <button onClick={handleUpdateBlog} className="bg-gray-800 text-white rounded-md px-4 py-2">
                            {isFetching ? "Updating..." : "Update"}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Update;