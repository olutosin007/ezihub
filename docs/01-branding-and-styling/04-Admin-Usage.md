# ézíhub Lead Capture - Admin Usage Guide

## Overview

The ézíhub website includes a built-in lead capture system that collects visitor information from multiple touchpoints and stores them in a SQLite database for easy access and export.

## Accessing the Admin Interface

### Local Development
- **URL**: http://localhost:3000/admin/leads (through dev server)
- **Direct**: http://localhost:4000/admin/leads (direct API access)

### Production
- **URL**: [Your Domain]/admin/leads

## Admin Interface Features

### 1. Lead List View
- **Table Display**: All leads in a sortable table format
- **Columns**: ID, Name, Email, Company, Role/Interest, Message, Source, Consent, Date
- **Real-time**: Updates automatically as new leads are submitted

### 2. Data Export
- **CSV Export**: Click "Export to CSV" button to download all leads
- **File Name**: `ezihub_leads.csv`
- **Format**: Standard CSV with all lead fields

### 3. Lead Sources
The system tracks where each lead came from:
- **hero**: Hero section "Join the Waitlist" button
- **footer**: Footer "Join the Waitlist" button  
- **support**: Contact form in Support section
- **newsletter**: Newsletter subscription in footer

## Lead Data Fields

### Core Fields (All Forms)
- **firstName**: First name (required)
- **lastName**: Last name (optional)
- **email**: Email address (required)
- **company**: Company name (optional)
- **roleOrInterest**: Professional, Employer, Institution, Partner, Other
- **message**: Message content (required for contact form)
- **source**: Where the lead originated
- **consent**: Agreement to be contacted
- **createdAt**: Timestamp of submission

### System Fields (Auto-generated)
- **id**: Unique identifier
- **userAgent**: Browser information
- **ipHash**: Hashed IP address for privacy

## Daily Operations

### 1. Checking New Leads
1. Open the admin interface
2. Review the table for new submissions
3. Leads are sorted by date (newest first)

### 2. Exporting Data
1. Click "Export to CSV" button
2. Save the file to your preferred location
3. Import into your CRM or email marketing tool

### 3. Lead Follow-up
- **Hero/Footer Leads**: Early access prospects
- **Support Leads**: Direct inquiries requiring response
- **Newsletter Leads**: Marketing list for launch announcements

## Data Backup

### Automatic Backups
- Database file: `data/ezihub_leads.sqlite`
- Location: Project root `/data/` folder
- **Backup Frequency**: Manual (recommended weekly)

### Manual Backup Process
1. Stop the server if running
2. Copy `data/ezihub_leads.sqlite` to backup location
3. Rename with date: `ezihub_leads_YYYY-MM-DD.sqlite`
4. Restart server

### Restore Process
1. Stop the server
2. Replace `data/ezihub_leads.sqlite` with backup file
3. Restart the server

## Security Notes

### Data Protection
- IP addresses are hashed for privacy
- No sensitive data stored beyond contact information
- Database file should be secured with proper file permissions

### Access Control
- Admin interface currently has no authentication
- Consider adding basic auth for production use
- Restrict access to authorized personnel only

## Troubleshooting

### Common Issues

#### 1. "Database not found" error
- **Cause**: Database file missing or corrupted
- **Solution**: Check if `data/ezihub_leads.sqlite` exists
- **Prevention**: Regular backups

#### 2. "Permission denied" error
- **Cause**: File system permissions
- **Solution**: Check file permissions on data directory
- **Fix**: `chmod 755 data/` and `chmod 644 data/ezihub_leads.sqlite`

#### 3. Admin page not loading
- **Cause**: Server not running or proxy issues
- **Solution**: Ensure both frontend (port 3000) and backend (port 4000) are running
- **Check**: Visit http://localhost:4000/admin/leads directly

### Performance Notes
- Database grows with each lead submission
- Consider archiving old leads periodically
- Export and clear database if it becomes too large

## Integration Options

### CRM Integration
- Export CSV and import into your CRM
- Map fields: firstName → First Name, email → Email, etc.
- Set up automated workflows for different lead sources

### Email Marketing
- Use newsletter leads for launch announcements
- Segment by role/interest for targeted campaigns
- Track engagement with different lead sources

### Analytics
- Monitor lead volume by source
- Track conversion rates from different touchpoints
- Use data to optimize form placement and content

## Support

For technical issues with the lead capture system:
1. Check server logs for error messages
2. Verify database file exists and is accessible
3. Test form submissions manually
4. Contact development team if issues persist

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained By**: ézíhub Development Team
