function hasCollided(Lbullet, Lwall)
{
bulletRightEdge = 1bullet.x +1bullet.width;
wallLeftEdge  = 1wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}
}





