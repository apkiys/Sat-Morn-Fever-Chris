module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your function executed successfully!",
        },
        null,
        2
      ),
    };
  };