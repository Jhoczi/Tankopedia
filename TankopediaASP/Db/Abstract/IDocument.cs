﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TankopediaASP.Db.Abstract;

public interface IDocument
{
    [BsonId]
    [BsonRepresentation(BsonType.String)]
    ObjectId Id { get; set; }
    DateTime CreatedAt { get; }
}