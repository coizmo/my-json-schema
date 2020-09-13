export const schema = {
  "title": "ユーザー",
  "type": "object",
  "properties": {
    "id": {
      "title": "ID",
      "type": "string",
      "pattern": "^[0-9a-zA-Z]{8}(-[0-9a-zA-Z]{4}){3}-[0-9a-zA-Z]{12}$"
    },
    "name": {
      "title": "ユーザー名",
      "type": "string",
      "pattern": "^[\\sa-zA-Z]+$"
    },
    "age": {
      "title": "年齢",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": [ "id", "name" ]
};
