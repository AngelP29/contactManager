<?php

	$inData = getRequestInfo();

	$conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");

	if ($conn->connect_error)
	{
		returnWithError($conn->connect_error);
	}
	else
	{
		$stmt = $conn->prepare("DELETE FROM CONTACTS WHERE ContactID=? AND UserID=?");
		$stmt->bind_param("ii", $inData["contactId"], $inData["userId"]);
		$stmt->execute();

		if($stmt->affected_rows > 0)
		{
			returnWithInfo();
		}
		else
		{
			returnWithError("No Contact Found");
		}

		$stmt->close();
		$conn->close();
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson($obj)
	{
		header('Content-type: application/json');
		echo $obj;
	}

	function returnWithError($err)
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson($retValue);
	}

	function returnWithInfo()
	{
		$retValue = '{"error":""}';
		sendResultInfoAsJson($retValue);
	}

?>