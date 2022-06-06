using MongoDB.Bson;
using TankopediaASP.Db.Abstract;

namespace TankopediaASP.Db.Repositories;

public class Document : IDocument
{
    public ObjectId Id { get; set; }
    public DateTime CreatedAt => Id.CreationTime;
}