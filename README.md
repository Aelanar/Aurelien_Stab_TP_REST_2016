# Aurelien_Stab_TP_REST_2016

###Users
<table>
    <thead>
        <tr>
            <th align="left">Operation</th>
            <th> Verb</th>
            <th align ="center">URL</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">Read(all)</td>
            <td> GET</td>
            <td align ="center">/users</td>
            <td align="left">Return the list of the users</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/users</td>
            <td align="left">Create a new user</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/users/id</td>
            <td align="left">Return only one user from its unique id</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/users/id</td>
            <td align="left">Update the user whose id is given in the the URI</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/users/id</td>
            <td align="left"> 	Delete the user whose id is given in the URI</td>
        </tr>
    </tbody>
</table>
<br/>
<br/>
<br/>
###Article
<table>
    <thead>
        <tr>
            <th align="left">Operation</th>
            <th> Verb</th>
            <th align ="center">URL</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">Read(all)</td>
            <td> GET</td>
            <td align ="center">/users/id/article</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/users/id/article</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/users/id/article/aid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/users/id/article/aid</td>
            <td align="left"> 	See Before</td>
        </tr>
    </tbody>
</table>
<br/>
<br/>
<br/>
###Comment
<table>
    <thead>
        <tr>
            <th align="left">Operation</th>
            <th> Verb</th>
            <th align ="center">URL</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">Read(all)</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/comment</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/users/id/article/aid/comment</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/comment/id</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/users/id/article/aid/comment/cid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/users/id/article/aid/comment/cid</td>
            <td align="left"> 	See Before</td>
        </tr>
    </tbody>
</table>
<br/>
<br/>
<br/>
###Picture
<table>
    <thead>
        <tr>
            <th align="left">Operation</th>
            <th> Verb</th>
            <th align ="center">URL</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">Read(all)</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/picture</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/users/id/article/aid/picture</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/picture/pid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/users/id/article/aid/picture/pid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/users/id/article/aid/picture/pid</td>
            <td align="left"> 	See Before</td>
        </tr>
    </tbody>
</table>
<br/>
<br/>
<br/>
###Picture Comments
<table>
    <thead>
        <tr>
            <th align="left">Operation</th>
            <th> Verb</th>
            <th align ="center">URL</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">Read(all)</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/picture/comment</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/users/id/article/aid/picture/comment</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/users/id/article/aid/picture/comment/pcid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/users/id/article/aid/picture/comment/pcid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/users/id/article/aid/picture/comment/pcid</td>
            <td align="left"> 	See Before</td>
        </tr>
    </tbody>
</table>
