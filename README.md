# Aurelien_Stab_TP_REST_2016
<br/>
<br/>

## REST API
<br/>
<br/>
<br/><img src = /REST_API.png>
<br/>
<br/>
<br/>
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
            <td align ="center">/authors</td>
            <td align="left">Return the list of the authors</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/authors</td>
            <td align="left">Create a new author</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/authors/id</td>
            <td align="left">Return only one author from its unique id</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/authors/id</td>
            <td align="left">Update the author whose id is given in the the URI</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/authors/id</td>
            <td align="left"> 	Delete the author whose id is given in the URI</td>
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
            <td align ="center">/authors/id/articles</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/authors/id/articles</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/authors/id/articles/aid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/authors/id/articles/aid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/authors/id/articles/aid</td>
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
            <td align ="center">/authors/id/articles/aid/comments</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/authors/id/articles/aid/comments</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/authors/id/articles/aid/comments/cid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/authors/id/articles/aid/comments/cid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/authors/id/articles/aid/comments/cid</td>
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
            <td align ="center">/authors/id/articles/aid/pictures</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/authors/id/articles/aid/pictures</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid</td>
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
            <td align ="center">/authors/id/articles/aid/pictures/pid/comments</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Create</td>
            <td> POST</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid/comments</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Read</td>
            <td> GET</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid/comment/pcid</td>
            <td align="left">See Before</td>
        </tr>
        <tr>
            <td align="left">Update</td>
            <td> PUT</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid/comments/pcid</td>
            <td align="left">See Before</td>
        </tr>
         <tr>
            <td align="left">Destroy</td>
            <td> DELETE</td>
            <td align ="center">/authors/id/articles/aid/pictures/pid/comments/pcid</td>
            <td align="left"> 	See Before</td>
        </tr>
    </tbody>
</table>
