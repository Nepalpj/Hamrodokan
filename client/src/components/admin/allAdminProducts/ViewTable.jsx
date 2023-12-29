import React from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";
const ViewTable = ({item}) => {
  return (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {item.productName}
              </th>
              <td class="px-6 py-4">
                <img src={item?.productImg?.url} alt={item.productName} className='w-24 h-24 object-cover'/>
              </td>
              
              <td class="px-6 py-4">{item.category}</td>
              <td class="px-6 py-4">{item.price}</td>
              <td class="px-6 py-4">{item.isInStock}</td>
              <td class="px-6 py-4">{item.manufacture}</td>
              <td class="px-6 py-4">{item.ratings}</td>
              <td class="px-6 py-4">
                <Link
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaPencilAlt/>
                </Link>
              </td>
            </tr>
  )
  
}
export default ViewTable