import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ColorLensIcon from '@mui/icons-material/ColorLens';
export const HeaderPage = [
  {
    url: "dashboard",
    label: "Dashboard",
  },
  {
    url: "item",
    label: "Quản lý mẫu",
  },
  {
    url: "category",
    label: "Kho lưu trữ",
  },
  {
    url: "users",
    label: "Users",
  },
  {
    url: "unit",
    label: "Đơn vị tính",
  }
]

export const SideBar = [
  {
    url: "Dashboard",
    label: "Dashboard",
    icon: <DashboardIcon/>
  },
  {
    url: "departments",
    label: "Phòng ban",
    icon: <StoreIcon />,
  },
  {
    label: "Ca làm việc",
    icon: <ScheduleIcon />,
    subMenu: [
      {
        url: "hour-interest",
        label: "Hệ số giờ công"
      },{
        url: "working-shift",
        label: "Quản lý ca làm việc"
      }
    ]
  },
  {
    label: "Nhân viên",
    icon: <PersonIcon />,
    subMenu: [
      {
        url: "users",
        label: "Quản lý nhân viên",
        icon: ""
      },
      {
        url: "designations",
        label: "Chức vụ"
      }
    ]
  },
  {
    url: "attendance",
    label: "Chấm công",
    icon: <SyncAltIcon/>
  },

  {
    label: "Bảng lương",
    icon: <AttachMoneyIcon />,
    subMenu: [
      {
        url: "payrun",
        label: "Tạo bảng lương",
      }
    ]
  },
  {
    url: "report",
    label: "Báo cáo",
    icon: <AssessmentIcon />,
   
  },
  {
    url: "insurance",
    label: "Quản lý BHXH",
    icon: <ReceiptLongIcon/>

  },
  {
    label: "Cài đặt",
    icon: <SettingsIcon />,
    subMenu: [
      {
        url: "day-leave",
        label: "Nghỉ phép",
      },
      {
        url: "holiday",
        label: "Nghỉ lễ"
      },
      {
        url: "beneficiaries",
        label: "Phụ cấp"
      }
    ]
  },
  {
    label: "Phân quyền",
    icon: <ColorLensIcon/>,
    subMenu:[
      {
        url: "role",
        label: "Vai trò"
      },
      {
        url: "permission",
        label: "Cấp quyền"
      }
    ]
  }

]