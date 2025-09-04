#!/bin/bash
# Revert script for HeadsUpToolbar changes

echo "Reverting HeadsUpToolbar to original state..."

# Copy backup files back
cp "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.jsx.backup" "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.jsx"
cp "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.less.backup" "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.less"

echo "HeadsUpToolbar reverted to original state."
echo "Restart the application to see changes."
