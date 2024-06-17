Initialize project
Add node fs
- file structure
  - src
  - data
  - utils

add sample data
- inventory.json
- add handgun, armalite, bolt

add read and write functionality to inventory.json

add CRUD functions
- index
logs inventory
npm run index

- show
shows details of a single item
npm run show `itemName`

- update
npm run update `itemName` `property` `value`

- destroy
moves item from inventory to archive.
npm run destroy `itemName`

- restore
moves item from archive to inventory.
npm run restore `itemName`
