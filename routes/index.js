var express = require('express');
var router = express.Router();

const site = `
<table>
<tr>
  <td class="column-one">
    <form>
      <label><input type="radio" name="region" value="Africa">Africa</label>
      <label><input type="radio" name="region" value="Americas">Americas</label>
      <label><input type="radio" name="region" value="Asia">Asia</label>
      <label><input type="radio" name="region" value="Europe">Europe</label>
      <label><input type="radio" name="region" value="Oceania">Oceania</label>
    </form>
  </td>
  <td class="column-two">
    <div class="answer"></div>
  </td>
</tr>
</table>`;

/* GET users listing. */
router.get('/', function(req, res, next) {
  const regex = /<^[<>]+>/g;
  const arr = site.match(regex);
  console.log(site);
  res.send(arr);
});

module.exports = router;

